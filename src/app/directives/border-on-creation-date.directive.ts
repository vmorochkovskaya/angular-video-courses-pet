import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appBorderOnCreationDate]'
})
export class BorderOnCreationDateDirective implements OnInit {
  @Input()
  public borderOnDate: string;

  constructor(private element: ElementRef) {
  }

  ngOnInit(): void {
    const currdate = new Date();
    const borderOnDate = new Date(this.borderOnDate);
    if (borderOnDate < currdate && borderOnDate >= new Date(new Date().setDate(new Date().getDate() - 14))) {
      this.border('green');
    } else if (borderOnDate > currdate) {
      this.border('blue');
    }
  }

  private border(color: string) {
    this.element.nativeElement.style.borderColor = color;
  }
}
