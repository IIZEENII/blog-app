import { WritableSignal, signal } from "@angular/core";

interface Params<T> {
    isMutationLoading?: boolean;
    isLoading?: boolean;
    hasError?: boolean;
    errorMessage?: string | null;
    data?: T[];
}   

class AsyncState<T> {
    isMutationLoading: boolean;
    isLoading: boolean;
    hasError: boolean;
    errorMessage: string | null;
    data: T[];

    constructor({ 
        isMutationLoading = false,
        isLoading = false, 
        hasError = false, 
        errorMessage = null, 
        data = [] 
    }: Params<T>) {
        this.isMutationLoading = isMutationLoading;
        this.isLoading = isLoading;
        this.hasError = hasError;
        this.errorMessage = errorMessage;
        this.data = data;
    }
}

export abstract class AsyncStore<T> {
    private state: WritableSignal<AsyncState<T>>;
    
    constructor() {
        this.state = signal(new AsyncState<T>({}));
    }
    
    getState(): AsyncState<T> {
        return this.state();
    }
    
    protected setAsLoading(): void {
        this.state.set(new AsyncState<T>({ isLoading: true }));
    }

    protected setMutationAsLoading(): void {
        this.state.set(new AsyncState<T>({ isMutationLoading: true, data: this.state().data }));
    }

    protected setAsFailed(errorMessage: string): void {
        this.state.set(new AsyncState<T>({ hasError: true, errorMessage }));
    }

    protected setAsSuccess(data: T[]): void {
        this.state.set(new AsyncState<T>({ data }));
    }
}