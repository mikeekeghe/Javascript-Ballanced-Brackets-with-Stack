
function isBalanced(str) {
    // Create a new stack
    class Stack {
        constructor() {
            this.maxSize = 1009;
            this.stack = [];
            this.top = -1;
        }

        push(value) {
            if (this.isFull()) {
                return false;
            }
            this.top++;
            this.stack[this.top] = value;
            return true;
        }

        pop() {
            if (this.isEmpty()) {
                return null;
            }
            this.top--;

            return this.stack.pop();
        }

        peek() {
            if (this.isEmpty()) {
                return null;
            }
            return this.stack[this.top];
        }

        isEmpty() {
            return this.top === -1;
        }

        isFull() {
            return this.top === this.maxSize - 1;
        }
    }

    const stack = new Stack();
    let output = "YES"; // Initialize output to "YES"

    const openBraces = ["{", "[", "("];
    const closeBraces = ["}", "]", ")"];

    // Loop through each character in str
    for (let i = 0; i < str.length; i++) {
        // If the character is an open brace, push it onto the stack
        if (openBraces.includes(str[i])) {
            stack.push(str[i]);
        } else if (closeBraces.includes(str[i])) {
            // If the character is a close brace
            if (stack.isEmpty()) {
                // If the stack is empty, it means there is no matching open brace
                output = "NO";
                break; // Exit the loop early since it's already unbalanced
            } else {
                // Pop the top of the stack and check if it matches the current close brace
                const topOfStack = stack.pop();
                if (
                    (str[i] === "}" && topOfStack !== "{") ||
                    (str[i] === "]" && topOfStack !== "[") ||
                    (str[i] === ")" && topOfStack !== "(")
                ) {
                    // If they don't match, it's unbalanced
                    output = "NO";
                    break; // Exit the loop early
                }
            }
        }
    }

    // After the loop, if the stack is not empty, it means there are unmatched open braces
    if (!stack.isEmpty()) {
        output = "NO";
    }

    return output;
}
