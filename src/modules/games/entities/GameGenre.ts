import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Game } from "./Game";
import Genre from "./Genre";

@Entity("game_genres")
class GameGenre {
  @PrimaryColumn()
  gameId: string;

  @ManyToOne(() => Game)
  @JoinColumn({
    name: 'gameId', referencedColumnName: 'id'
  })
  game: Game;

  @PrimaryColumn()
  genreId: string;

  @ManyToOne(() => Genre)
  @JoinColumn({
    name: 'genreId', referencedColumnName: 'id'
  })
  genre: Genre;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  update_at: Date;
}

export default GameGenre;