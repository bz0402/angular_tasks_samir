import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  ParentMessage:string = '';
  SendMessage() 
  {
    let TextArea = document.getElementById('msgBox') as HTMLTextAreaElement;
    if(TextArea!=null)
    {
      this.ParentMessage = TextArea.value;
    }
    else
    {
     alert('TextArea is empty Put some text in it');
    }
    
  }
ClearMessage() {
let TextArea = document.getElementById('msgBox') as HTMLTextAreaElement;
 if(TextArea!=null){
  TextArea.value = '';  
}



}

}
