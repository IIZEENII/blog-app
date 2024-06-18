import { WritableSignal, signal } from '@angular/core';

interface Params<T> {
  isMutationLoading?: boolean;
  isLoading?: boolean;
  hasError?: boolean;
  errorMessage?: string | null;
  item?: T | null;
}

class SingleAsyncState<T> {
  isMutationLoading: boolean;
  isLoading: boolean;
  hasError: boolean;
  errorMessage: string | null;
  item: T | null;

  constructor({
    isMutationLoading = false,
    isLoading = false,
    hasError = false,
    errorMessage = null,
    item = null,
  }: Params<T>) {
    this.isMutationLoading = isMutationLoading;
    this.isLoading = isLoading;
    this.hasError = hasError;
    this.errorMessage = errorMessage;
    this.item = item;
  }
}

export abstract class SingleAsyncStore<T> {
  private state: WritableSignal<SingleAsyncState<T>>;

  constructor() {
    this.state = signal(new SingleAsyncState<T>({}));
  }

  getState(): SingleAsyncState<T> {
    return this.state();
  }

  protected setAsLoading(): void {
    this.state.set(new SingleAsyncState<T>({ isLoading: true }));
  }

  protected setMutationAsLoading(): void {
    this.state.set(
      new SingleAsyncState<T>({
        isMutationLoading: true,
        item: this.state().item,
      })
    );
  }

  protected setAsFailed(errorMessage: string): void {
    this.state.set(new SingleAsyncState<T>({ hasError: true, errorMessage }));
  }

  protected setAsSuccess(item: T): void {
    this.state.set(new SingleAsyncState<T>({ item }));
  }
}
