import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  
  ChildMessage:any = '';
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
messageToParent() {
  this.ChildMessage = "Marked as Read";
  setTimeout(() => {
    this.ChildMessage = '';
  }
  , 2000);
  
}

}
