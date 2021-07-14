import { Subscription } from "./domain/subscription";

//metodos que deben implementarse  para trabajar con la BD
export interface SubscriptionRepository {
  all(): Promise<Subscription[]>;

  findByUserAndCode(
    user_id: number,
    code: string
  ): Promise<Subscription | null>;

  find(id: number): Promise<Subscription | null>;

  store(entry: Subscription): Promise<void>;

  update(entry: Subscription): Promise<void>;

  remove(id: number): Promise<void>;
}
