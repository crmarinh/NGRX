interface User {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    avatar: string;
}

interface ListUsers<T> {
    page: number;
    perPage: number;
    total: number;
    totalPages: number;
    data: T[]
}

interface UserResponse {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
}

export { User, ListUsers, UserResponse}