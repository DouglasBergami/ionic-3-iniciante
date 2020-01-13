import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers : [
    MoovieProvider
  ]
})
export class FeedPage {

  public nomeUsuario:string = "Charles Franca do codigo";
  public listaFilmes = new Array<any>();

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public movieProvider: MoovieProvider) {
  }

  public somaDoisNumeros(num1:number, num2: number): void{
    alert(num1 + num2);
  }

  ionViewDidLoad() {

    this.movieProvider.getLatesMovies().subscribe(
      data=>{
        const response = (data as any);
        this.listaFilmes = response.results
        console.log(this.listaFilmes);
      },
      error =>{
        console.log(error);
      }
    )
  }

}
