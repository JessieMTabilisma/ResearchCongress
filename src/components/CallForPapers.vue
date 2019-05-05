<template>
  <div class="wrapper-call">
    <vs-row>
      <vs-col vs-type="flex" vs-align="center" vs-justify="center" vs-w="3" vs-offset="1">
        <img src="../assets/call.svg" alt>
      </vs-col>
      <vs-col vs-w="7">
        <div class="document-view">
          <h1>Call for Papers</h1>
          <hr>
          <p>
            The 13th Northern Luzon Research Congress on Computing and Information Sciences with the theme
            <span>
              Cultivating Inter-disciplinary Research through
              Collaboration and Innovation Research
            </span> will be held on April 30 at the Prince Bernhard Gym of Saint Louis University.
          </p>
          <p>
            The Research Congress is an annual event that showcase the research outputs of students and faculty coming from
            SLU and other Universities and Colleges in Northern Luzon. This event is also a part of the SLU's Reseacrh and Invention Month activities.
          </p>
          <p>
            Though open to the discussion of diverse subject about IT and Computing, the Research Congress Commitee will welcome research outputs for
            presentation with emphasis on the following topics:
          </p>
          <!--  -->
          <h3>- Robotics</h3>
          <h3>- Blockchain Technology</h3>
          <h3>- Big data, Data analytics and Visualization</h3>
          <h3>- Assistive Technologies</h3>
          <h3>- Cloud Computing</h3>
          <h3>- Information Technology Projects</h3>
          <h3>- Applied Mathematics</h3>
          <h3>- Machine Learning and AI-driven Development</h3>
          <h3>- Cybersecurity, Data Privacy and Ethics</h3>
          <h3>- Smart space</h3>
          <h3>- Assisted Learning</h3>
          <h3>- Mobile application and Game Development</h3>
          <h3>- Mathematics, Library Management and Information Management</h3>
          <h4>In addressing the main theme for this event, the research congress generally aims to:</h4>
          <ul>
            <li>Advance the ICT research agenda in Northern Luzon</li>
            <li>Provide faculty and students the oppurtunity to present their research outputs</li>
            <li>Provide forum for exchange of ideas in a research congress</li>
          </ul>
        </div>
        <div class="document-view2">
          <p>
            Interested presenters may submit to the ICT Research Congress secretariat
            (email:
            <a
              href="mailto: bpbacani@gmail.com"
            >bpbacani@gmail.com</a>)
            on or before APRIL 10, 2020 the following:
          </p>
          <ul>
            <li>Name of researcher/s and the research title together with the abstract</li>
            <li>A contact information (Phone number and Email)</li>
          </ul>
          <p>
            Authors of papers which are accepted will be informedon or before APRIL 15, 2020 through email.
            For further information, you may also call us at (074)443-2001 local 281 or in our contact page
            <span>
              <router-link to="/contact-us">here</router-link>
            </span>
            .
          </p>
        </div>
      </vs-col>
    </vs-row>
  </div>
</template>
<script>
export default {};
</script>
<style lang="sass" scoped>
.wrapper-call
  min-height: 90vh
  width: 100%
  position: absolute
  margin-top: 10vh
  img
    position: fixed
    margin-top: -55vh
  .document-view2
    min-height: 40vh
    width: 100%
    background-color: rgb(255, 255, 255)
    box-shadow: 0 15px 30px 0 rgba(0,0,0,0.11),0 5px 15px 0 rgba(0,0,0,0.08)
    margin-top: 20px
    margin-bottom: 50px
    padding-bottom: 50px
    p
      width: 90%
      margin-left: 5%
      margin-top:  3vh
      padding-top: 5vh
      text-align: justify
      line-height: 150%
    ul
      margin-top: 1vh
      margin-left: 8%
      text-align: left
  .document-view
    min-height: 100vh
    width: 100%
    background-color: rgb(255, 255, 255)
    box-shadow: 0 15px 30px 0 rgba(0,0,0,0.11),0 5px 15px 0 rgba(0,0,0,0.08)
    margin-top: 20px
    margin-bottom: 50px
    padding-bottom: 50px
    h1
      text-align: left
      position: relative
      top: 10px
      left: 30px
      padding-bottom: 10px
      text-transform: uppercase
      color: grey
    hr
      width: 90%
      margin-left: 5%
      background-color: rgb(248, 248, 248)
      border: 1px solid #333333
    p
      width: 90%
      margin-left: 5%
      margin-top:  2vh
      text-align: justify
      line-height: 150%
    h3
      margin-top: 3vh
      text-align: left
      margin-left: 5%
    h4
      font-size: 12px
      margin-top: 2vh
      text-align: left
      margin-left: 5%
    ul
      margin-top: 1vh
      margin-left: 8%
      text-align: left
      li
        list-style-type: decimal
</style>
