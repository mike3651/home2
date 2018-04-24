export class StringSolutions {
    /**
     * @description Initiatlizes an instance of this class.
     */
    public constructor() {

    }

    /** 
     * @method permutate
     * 
     * There are n! permutations and the run time is 2^n
     * 
     * @description Method that prints out all of the permutations of a string.
     * @param str The string to print all permutations of.
     */
    public permutate(str: string): void {
        this.permutationHelper(str, 0, str.length);
    }

    /** 
     * @method permutationHelper
     * 
     * @description Method that prints out all of the permutations of a string.
     *              This method uses backtracking to solve the problem.
     * @param str The string to print all permutations of.
     * @param left The starting left point of the string.
     * @param right The starting right point of the string.
     */
    private permutationHelper(str: string, leftBound: number, rightBound: number): void {
        // If we are dealing with 'one' character then we can just print the string
        if(leftBound === rightBound) {
            console.log(str);
        } else {
            // Use backtracking here
            for(let start: number = leftBound; start < rightBound; start++) {
                // Choose: set the character
                str = this.swap(str.split(''), leftBound, start + leftBound);

                // Explore: find all the other paths with the next character
                this.permutationHelper(str, leftBound + 1, rightBound);
                
                // Unchoose: unset the character
                str = this.swap(str.split(''), leftBound, leftBound + start);
            }
        }
    }

    /** 
     * @method swap
     * 
     * @description Swaps to characters in a string.
     * @param str The 'string' that is being 'modified'
     * @param firstIndex The reference to the first character.
     * @param secondIndex The reference to the second character.
     * @returns The new modified string.
     */
    private swap(str: string[], firstIndex: number, secondIndex: number): string {
        let temp = str[firstIndex];
        str[firstIndex] = str[secondIndex];
        str[secondIndex] = temp;
        return str.join('');
    }
}