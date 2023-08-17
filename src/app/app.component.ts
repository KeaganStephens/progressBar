import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'progressTracker';
  columnTemplate!: string;

  value = [false,false,false,false,false,false,false,false,false]
  current = 0

  ngOnInit() {
    // Call myTimer immediately and then set an interval
    this.myTimer();
    setInterval(() => {
      this.myTimer();
    }, 1000);
    
    this.columnTemplate = `repeat(${this.value.length}, 1fr)`;
  }

  myTimer() {
    console.log(this.value)
    this.value[this.current] = !this.value[this.current]
    if(this.current + 1 >= this.value.length){
      this.current = 0
    }else{
      this.current++
    }
  }
}
