import React from "react";
import "./Sidebar.css";

function Info() {

  return (
    <div className="info">
      <form >
        <div className="inputs">
          <label>Bio</label>
         
          <textarea name="message" rows="10" cols="30">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nunc
            arcu, dignissim sit amet sollicitudin iaculis, vehicula id urna. Sed
            luctus urna nunc. Donec fermentum, magna sit amet rutrum pretium,
            turpis dolor molestie diam, ut lacinia diam risus eleifend sapien.
            Curabitur ac nibh nulla. Maecenas nec augue placerat, viverra tellus
            non, pulvinar risus.
          </textarea>

          <label>Birthday</label>
          <input
            type="text"
            placeholder="Nov 10, 1999 "
          />

          <label>Country</label>
          <select id="cars" name="cars" >
            <option value="nepal">Nepal</option>
            <option value="USA">USA</option>
            <option value="canada">Canada</option>
            <option value="uk">UK</option>
          </select>

          <label>Phone</label>
          <input type="text" 
           placeholder="(+977) 9817067110"/>
        </div>
      </form>
    </div>
  );
}

export default Info;
