# progressBar
Testing out *ngFor and *ngIf as a way of creating a progress bar

The idea was simple and easily implemented. I do not know of the efficiency of my solution.

I used a array(value) to store multiple boolean values.This allowed for a easy integration with the *ngif.
I used *ngFor on value to display the progress bar. So it is scalable. The progress is indicated by changing the 
color of the div's that were created using *ngFor. *ngIf is used to check if a class should be added to the div by checking 
the value of the current array(value) index. The index boolean is changed using the setInrerval function and just having a 
pointer keep track of the current idex.

![img1](https://github.com/KeaganStephens/progressBar/blob/main/img/img/recording.mov?raw=true)
After a few seconds.
![img1](https://github.com/KeaganStephens/progressBar/blob/main/img/img/Screenshot(1)09.25.39.png?raw=true)
a few more seconds.
![img1](https://github.com/KeaganStephens/progressBar/blob/main/img/img/Screenshot(2)09.25.45.png?raw=true)
