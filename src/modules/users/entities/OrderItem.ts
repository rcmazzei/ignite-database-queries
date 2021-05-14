import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Game } from "../../games/entities/Game";
import Order from "./Order";

@Entity("order_items")
class OrderItem {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  orderId: string;

  @ManyToOne(() => Order)
  @JoinColumn({
    name: 'orderId', referencedColumnName: 'id'
  })
  order: Order;

  @Column()
  gameId: string;

  @ManyToOne(() => Game)
  @JoinColumn({
    name: 'gameId', referencedColumnName: 'id'
  })
  game: Game;

  @Column()
  quantity: number;

  @Column()
  amount: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default OrderItem;