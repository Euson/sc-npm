export interface GreeterInput {
    name: string;
    greeting?: string;
}

export const Greeter = (obj: GreeterInput) => {
    const greeting = obj.greeting || 'Hello';
    return `${greeting} ${obj.name}`;
};
