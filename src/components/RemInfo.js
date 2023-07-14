import React from "react";
import Container from 'react-bootstrap/Container';

function RemInfo(){
  return(
    <React.Fragment>
      <Container>
        <hr />
        <div className="p-3 mb-2 bg-dark bg-gradient text-white rounded-5">
          <h4> Looking to reach your full <strong>Dreaming Potential</strong><em>(tm)(c)</em>? </h4>
          <h5>Wikipedia has this to say about REM sleep:</h5>
          <p><em>Rapid eye movement sleep (REM sleep or REMS) is a unique phase of sleep in mammals and birds, characterized by random rapid movement of the eyes, accompanied by low muscle tone throughout the body, and the propensity of the sleeper to dream vividly. </em>
          </p>
          <p>REM sleep is called "paradoxical" because of its similarities to wakefulness.
          </p>
          <p><em>Neural activity during REM sleep seems to originate in the brain stem. REM sleep is punctuated... by bursts of electrical activity. They exhibit their highest amplitude upon moving into the visual cortex and are a cause of the "rapid eye movements" in paradoxical sleep.  </em>
          </p>
          <p><strong>After waking from REM sleep, the mind seems "hyperassociative"—more receptive to semantic priming effects. People awakened from REM have performed better on tasks like anagrams and creative problem solving.</strong></p>

          <h4>Identify your stage of sleep:</h4>
          <ul>
            <li><strong>Stage One</strong> - occurs mostly in the beginning of sleep, with slow eye movement. This state is sometimes referred to as relaxed wakefulness.[4] Alpha waves disappear and the theta wave appears. People aroused from this stage often believe that they have been fully awake. During the transition into stage-1 sleep, it is common to experience hypnic jerks</li>
            <li><strong>Stage Two</strong> - no eye movement occurs, and dreaming is very rare. The sleeper is quite easily awakened. EEG recordings tend to show characteristic "sleep spindles", which are short bursts of high frequency brain activity,[6] and "K-complexes" during this stage.</li>
            <li><strong>Stage Three</strong> - previously divided into stages 3 and 4, is deep sleep, slow-wave sleep (SWS). Stage 3 was formerly the transition between stage 2 and stage 4 where delta waves, associated with "deep" sleep, began to occur, while delta waves dominated in stage 4. In 2007, these were combined into just stage 3 for all of deep sleep.[7] Dreaming is more common in this stage than in other stages of NREM sleep though not as common as in REM sleep. The content of SWS dreams tends to be disconnected, less vivid, and less memorable than those that occur during REM sleep.[8] This is also the stage during which parasomnias most commonly occur.</li>
          </ul>
        
          <h4>It is suggested that dreaming involves two selfs</h4>
          <p>Find <em>your</em> self with our ethereal dream log</p>
          <hr />
          </div>
          <div className="p-3 mb-2 bg-dark bg-gradient text-white rounded-5">
          <h6><em>Sources:</em></h6>
          <p><em>
          <ul>
            <li><a href="https://en.wikipedia.org/wiki/Non-rapid_eye_movement_sleep">Non-Rapid Eye Movment</a></li>
            <li><a href="https://en.wikipedia.org/wiki/Rapid_eye_movement_sleep">Rapid Eye Movement</a></li>
          </ul>
          </em></p>
        </div>
      </Container>
    </React.Fragment>
  )
}

export default RemInfo;