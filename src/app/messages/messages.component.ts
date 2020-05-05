import { Component, OnInit } from '@angular/core';
import {MessageService} from '../message.service'

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  //inject a public message service because it will be bound in the template
  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

}
