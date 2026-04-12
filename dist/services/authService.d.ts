interface User {
    name: string;
    password: string;
}
export declare function signUpUser(user: User): Promise<string>;
export declare function loginUser(user: User): Promise<string>;
export {};
//# sourceMappingURL=authService.d.ts.map