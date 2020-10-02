import React from 'react';
import '../../login.css';

import {Button, Form, Container} from "react-bootstrap";

const SignIn = () => (
  <div class="wrapper fadeInDown">
  <div id="formContent">
    <div class="fadeIn first">
      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAeFBMVEX///8AAAALCwv7+/vj4+Pn5+cWFhaHh4cEBARBQUGhoaEdHR2oqKhiYmLr6+v4+PjR0dFMTEwtLS2SkpIPDw9ubm5dXV3GxsZYWFjx8fEkJCQ4ODh7e3vb29u7u7uzs7MzMzONjY1/f38+Pj5ISEicnJxycnK5ubkklObtAAADmklEQVR4nO2ZaXeqMBCGHUQWgbKJLO6o7f//h5eYBAKERbR4es88X3oAybyZFehigSAIgiAIgiAIgiAIgiB/juP5evqkfU8BgF38MfsrCx4k6mfsuztgKJ9xwpbbh+vyE/b10v6GhEA9zmz/VNoHmxybYHrvW9xSHLf/J48CoDjkmPjDiL7eJIBk965/sSoBYFUcxgYNhj6geySPxbJ+j9oWF1AoTTN+EL5FgEaL6977o3RPdw3+6svn9s232F94GlvuIL18WLO/pd16PWzltz3DIWAdZt/OBDdUyvZ7DOoCWD0YzsvZ6Dq8ye3r23HvNNzMhKsrgv2yHkALX+5Na40vu7vELLdXtrNhJ32eomoirQfIXh6T6Xe1OSM4m2ZQHd/E5l/FoVYP+gu2I7rj1XfpBRHFYbtPdToGlyHzS6sepsYBArZD1042deubxOa9pgiSwhrPV2Q0VNJ6sPbpNAEAW57Hy/ji7LINKJvMdEKv3NPxXAu1t6sLYPUwMRsfW9B7xC/typ7PyuQuxquqBwgmjEkW66ijoai6JdgCg/k5FeIg1gP4EwUU7PLWs453ubbS0rLZNZOfebEexMW1ZH+PV+limaqxnfvSuoDyWYCPqFY9eE+NSbmRXnj3dXOlcYXWg2atf1cAyXd68yGpn+f1AOfxj66TBFQWTplwUqgHSMaOyYkCyu4hjqhaPRgjBVySTG5gkA3rO9WIqtUDkGtacE32tjfQoNI43AZSGwNkP3QBPqLEeqACuFY/HHyjSqvx+wT8TW0tKdlGgG/2YDTS/HkJ3SOqKaBo1NLHhstRmANqu/MN0jWi2gKKxJW0qOK05ucnNhCXDjwPH1GNOEgEgNlOR37pnFMN2+Y9I1D4iLoNCYB9pwASzocPmp4cBWu+qegDqQCtR0DhSxKiQ7PBj4OOqPVrAug0jyYJAOPhQCGLpQLyfgFA3tDUVkGNVEB84FU3P5mEFI1k061520iudf9JBHSUoQhxgQ4TWdfysLV68NM23xKQFKfiqQIe/ivzsL660dWKG2tYJAmmCoBIzENh9b5h1FhCKU65kwXU8pCsTsZxLozjj3xiq/CS1Qetp2tT0ohnonjn84sGq73ry9pou6l6iG3dubLuLn0emJxwz/MtVTmf/UReArPZ9ztKcC77UVcLmMe81v0Zaw7zRtTzAcQavv9FMr23//38ogLFOifh+/6zgCAIgiAIgiAIgiAIgvxn/ANbvy+gODmAwgAAAABJRU5ErkJggg==" id="icon" alt="User Icon" />
    </div>

    <form>
   
      <input type="text" id="login" class="fadeIn second" name="login" placeholder="login" />
      <input type="text" id="password" class="fadeIn third" name="login" placeholder="password" />
      <input type="submit" class="fadeIn fourth" value="Log In" />

    </form>

    <div id="formFooter">
      <p>Forgot Password?</p>
    </div>


  </div>
</div>
);

export default SignIn;