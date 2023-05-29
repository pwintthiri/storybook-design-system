import './Sample.stories';

import { Button } from './Button'
import { TextInput } from './TextInput';
import { Card } from './Card'

export const Sample = () => {
    return (
        <body>
          <div className="content">
            <header></header>
            <div className="hero-section">
              Enter your details here:
              <p></p>
              <TextInput
              helpText="Type in your full name"
              labelText="Name"
              leadIcon
              trailingIcon
              type="lined"
              />
              <p></p>
            <Button
              icon
              label="Confirm Submission"
              onClick={() => {}}
              rounded
              error
              type="tertiary"
            />
            </div>
            {/* <section>
              <div className="each-section"> */}
              
              {/* </div>
              <div className="each-section"></div>
              <div className="each-section"></div> */}
    
              <div className="section-1">
              <Card
                button
                buttonText="More"
                content="Add text"
                onClick={() => {}}
                mediaURL="https://img-19.commentcamarche.net/cI8qqj-finfDcmx6jMK6Vr-krEw=/1500x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg"
                inverted
                subcontent="Here is more text"
                subtitleText="Subtitle"
                titleText="Mountains"
              />
              </div>
              <div className="section-2">
              <Card
                button
                buttonText="More"
                content="Content"
                onClick={() => {}}
                mediaURL="https://cdn1.photostockeditor.com/t/1912/sky-person-hand-holding-photo-frame-frame-frame-image.jpg"
                subcontent="Here is more text"
                subtitleText="Subtitle"
                titleText="The Beach"
              />
              </div>
              <div className="section-3">
              <Card
                button
                buttonText="More"
                content="Grass"
                onClick={() => {}}
                inverted
                mediaURL="https://img.freepik.com/free-photo/visiting-site-photo-frame_23-2149512724.jpg"
                subcontent="Here is more text"
                subtitleText="Subtitle"
                titleText="The Trees"
              />
              </div>
            {/* </section> */}
              
            <div className="bottom-section"></div>
            <footer></footer>
    
          </div>
    </body>
    );
}

// function Sample() {
//   return (
//     <body>
//       <div className="content">
//         <header></header>
//         <div className="hero-section">
//           Enter your details here:
//           <p></p>
//           <TextInput
//           helpText="Type in your full name"
//           labelText="Name"
//           leadIcon
//           trailingIcon
//           type="lined"
//           />
//           <p></p>
//         <Button
//           icon
//           label="Confirm Submission"
//           onClick={() => {}}
//           rounded
//           error
//           type="tertiary"
//         />
//         </div>
        {/* <section>
          <div className="each-section"> */}
          
          {/* </div>
          <div className="each-section"></div>
          <div className="each-section"></div> */}

          {/* <div className="section-1">
          <Card
            button
            buttonText="More"
            content="Add text"
            onClick={() => {}}
            mediaURL="https://img-19.commentcamarche.net/cI8qqj-finfDcmx6jMK6Vr-krEw=/1500x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg"
            inverted
            subcontent="Here is more text"
            subtitleText="Subtitle"
            titleText="Mountains"
          />
          </div>
          <div className="section-2">
          <Card
            button
            buttonText="More"
            content="Content"
            onClick={() => {}}
            mediaURL="https://cdn1.photostockeditor.com/t/1912/sky-person-hand-holding-photo-frame-frame-frame-image.jpg"
            subcontent="Here is more text"
            subtitleText="Subtitle"
            titleText="The Beach"
          />
          </div>
          <div className="section-3">
          <Card
            button
            buttonText="More"
            content="Grass"
            onClick={() => {}}
            inverted
            mediaURL="https://img.freepik.com/free-photo/visiting-site-photo-frame_23-2149512724.jpg"
            subcontent="Here is more text"
            subtitleText="Subtitle"
            titleText="The Trees"
          />
          </div>
          
        <div className="bottom-section"></div>
        <footer></footer>

      </div>
</body>
  );
}

export default Sample; */}

