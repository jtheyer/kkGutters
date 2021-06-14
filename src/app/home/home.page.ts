import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  @ViewChild('slideWithNav', { static: false }) slideWithNav: IonSlides;
  @ViewChild('slideWithNav2', { static: false }) slideWithNav2: IonSlides;
  @ViewChild('slideWithNav3', { static: false }) slideWithNav3: IonSlides;

  nyCounties = [
    'Broome',
    'Chemung',
    'Chenango',
    'Tioga',
    'Tompkins',
  ]
  paCounties = [
    'Bradford',
    'Lackawanna',
    'Lycoming',
    'Sullivan',
    'Wyoming',
  ]

  hoursWkDay = [
    'Monday: 6:00 a.m. - 6:00 p.m.',
    'Tuesday: 6:00 a.m. - 6:00 p.m.',
    'Wednesday: 6:00 a.m. - 6:00 p.m.',
    'Thursday: 6:00 a.m. - 6:00 p.m.',
    'Friday: 6:00 a.m. - 6:00 p.m.',
  ]
  hoursWkEnd = [
    'Saturday: 6:00 a.m. - 6:00 p.m.',
    'Sunday: Closed',
  ]

  jsonData = {
    "chat":
      [
        {
          "title": "79",
          "content":
          {
            "from": "Testing Page - joe",
            "from_id": 79,
            "to": "userTestName",
            "to_id": 1548,
            "unread": 2,
            "messages":
              [
                { "id": 154, "page_id": 79, "user_id": 1548, "text": "this is the first message to be sent by joe", "seen": 0, "isgroup": 0, "group_id": null, "created_at": "2019-04-10 13:54:10", "updated_at": "2019-04-10 13:54:10" },
                { "id": 155, "page_id": 79, "user_id": 1548, "text": "this is the second message sent to joe", "seen": 0, "isgroup": 0, "group_id": null, "created_at": "2019-04-11 12:37:39", "updated_at": "2019-04-11 12:37:39" }
              ]
          }
        },
        {
          "title": "44",
          "content":
          {
            "from": "Rock Music Band",
            "from_id": 44,
            "to": "userTestName",
            "to_id": 1548,
            "unread": 1,
            "messages":
              [
                { "id": 156, "page_id": 44, "user_id": 1548, "text": "Hello this message from rock", "seen": 0, "isgroup": 0, "group_id": null, "created_at": "2019-04-11 13:18:44", "updated_at": "2019-04-11 13:18:44" }
              ]
          }
        }
      ],
    "unread": 3
  }


  sliderOne: any;
  sliderTwo: any;
  sliderThree: any;
  //Configuration for each Slider
  slideOptsOne = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true
  };
  slideOptsTwo = {
    initialSlide: 1,
    slidesPerView: 2,
    loop: true,
    centeredSlides: true,
    spaceBetween: 5,
    autoplay: true
  };
  slideOptsThree = {
    initialSlide: 0,
    slidesPerView: 3,
    autoplay: true
  };

  constructor() {
    //Item object for 1
    this.sliderOne =
    {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems: [
        {
          id: 1
        },
        {
          id: 2
        },
        {
          id: 3
        },
        {
          id: 4
        },
        {
          id: 5
        },
        {
          id: 6
        },
      ]
    };
    //Item object for 2
    this.sliderTwo =
    {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems: [
        {
          id: 1
        },
        {
          id: 2
        },
        {
          id: 3
        },
        {
          id: 4
        },
        {
          id: 5
        },
        {
          id: 6
        },
      ]
    };

    //Item object for 3
    this.sliderThree =
    {
      isBeginningSlide: true,
      isEndSlide: false,
      slidesItems: [
        {
          id: 1
        },
        {
          id: 2
        },
        {
          id: 3
        },
        {
          id: 4
        },
        {
          id: 5
        },
        {
          id: 6
        },
      ]
    };
  }

  ngOnInit() {
  }

  //Move to Next slide
  slideNext(object, slideView) {
    slideView.slideNext(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });
  }

  //Move to previous slide
  slidePrev(object, slideView) {
    slideView.slidePrev(500).then(() => {
      this.checkIfNavDisabled(object, slideView);
    });;
  }

  //Method called when slide is changed by drag or navigation
  SlideDidChange(object, slideView) {
    this.checkIfNavDisabled(object, slideView);
  }

  //Call methods to check if slide is first or last to enable disbale navigation  
  checkIfNavDisabled(object, slideView) {
    this.checkisBeginning(object, slideView);
    this.checkisEnd(object, slideView);
  }

  checkisBeginning(object, slideView) {
    slideView.isBeginning().then((istrue) => {
      object.isBeginningSlide = istrue;
    });
  }
  checkisEnd(object, slideView) {
    slideView.isEnd().then((istrue) => {
      object.isEndSlide = istrue;
    });
  }

}
