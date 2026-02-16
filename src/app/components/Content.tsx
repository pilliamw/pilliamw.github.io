export default function Content() {
  return (
    <div id="content">
      <div id="content_portfolio" className="content_section"></div>
      
      <div id="content_aboutme" className="content_section">
        <p id="abt_title" className="celestial">About Me</p>
        <hr id="abt_sep"/>
        <div id="abt_content">
          <img id="abt_pfp" src="assets/images/pfp.svg"/>
          <p id="abt_text">
            Hi there! I'm William Park, currently a high schooler at Poolesville HS, and I love coming up with
            algorithms and programs to solve challenging problems (or sometimes, just for plain fun!)
            <br/><br/>
            I usually go by Pilliam Wark, or just Pilliam for short. My username when I was younger was SmartyNotchy; 
            if you see that name floating around, it's probably referring to me as well. 
            <br/><br/>
            <span id="abt_text_footer">
              Fun fact: there's a <a href="https://en.wikipedia.org/wiki/William_Park">disambiguation page</a> for William Park 
              on Wikipedia, and don't get me started on how common
              my first name is by itself. Hence, <b>P</b>illiam <b>W</b>ark. Gotta stand out somehow!
            </span>
          </p>
        </div>
        
      </div>
      
      <div id="content_experience" className="content_section"></div>
      <div id="content_fun" className="content_section"></div>

      <div id="content_contacts" className="content_section">
        <p id="cntct_title" className="celestial">Contacts</p>
        <hr id="cntct_sep"/>
        
        <p id="cntct_main">If you need to contact me for whatever reason, the best way is to shoot me an email at 
          <a href="mailto:&#112;&#105;&#108;&#108;&#105;&#097;&#109;&#119;&#097;&#114;&#107;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;">&#112;&#105;&#108;&#108;&#105;&#097;&#109;&#119;&#097;&#114;&#107;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;</a>!
          I'll try to respond as quickly as possible (ideally within a couple days.)
          You can find me on other platforms with the links below.
        </p>
        
        <div id="cntct_buttons">
          <button id="cntct_buttons_email" className="celestial" onClick={()=>{window.open('mailto:pilliamwark@gmail.com', '_blank', 'noopener,noreferrer');}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="white">
              <path d="M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z"/>
            </svg>

            <p className="cntctbutton_subtitle">pilliamwark@gmail.com</p>

            <svg className="openinnew" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="white">
              <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/>
            </svg>
          </button>

          <button id="cntct_buttons_linkedin" className="celestial" onClick={()=>{window.open('https:\/\/www.linkedin.com\/in\/pilliamwark', '_blank', 'noopener,noreferrer');}}>
            <svg viewBox="0 0 24 24" fill="white">
              <path transform="scale(0.8) translate(3,3)" d="M20.447 20.452H16.89v-5.569c0-1.328-.027-3.039-1.852-3.039-1.853 0-2.137 1.445-2.137 2.939v5.669h-3.557V9h3.414v1.561h.049c.476-.9 1.637-1.852 3.368-1.852 3.598 0 4.262 2.368 4.262 5.452v6.291zM5.337 7.433a2.062 2.062 0 01-2.063-2.063c0-1.138.925-2.063 2.063-2.063 1.137 0 2.063.925 2.063 2.063 0 1.138-.926 2.063-2.063 2.063zM6.896 20.452H3.778V9h3.118v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.225.792 24 1.771 24h20.451C23.2 24 24 23.225 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
            </svg>

            <p className="cntctbutton_subtitle">pilliamwark</p>

            <svg className="openinnew" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="white">
              <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/>
            </svg>
          </button>

          <button id="cntct_buttons_github" className="celestial" onClick={()=>{window.open('https:\/\/github.com\/pilliamw', '_blank', 'noopener,noreferrer');}}>
            <svg viewBox="0 0 24 24" fill="white">
              <path transform="scale(0.9) translate(1,1)" d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
            </svg>

            <p className="cntctbutton_subtitle">pilliamw</p>

            <svg className="openinnew" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="white">
              <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/>
            </svg>
          </button>

          <button id="cntct_buttons_discord" className="celestial" onClick={()=>{window.open('https:\/\/discordapp.com\/users\/714930955957043360', '_blank', 'noopener,noreferrer');}}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" fill="white">
              <path d="M 41.625 10.769531 C 37.644531 7.566406 31.347656 7.023438 31.078125 7.003906 C 30.660156 6.96875 30.261719 7.203125 30.089844 7.589844 C 30.074219 7.613281 29.9375 7.929688 29.785156 8.421875 C 32.417969 8.867188 35.652344 9.761719 38.578125 11.578125 C 39.046875 11.867188 39.191406 12.484375 38.902344 12.953125 C 38.710938 13.261719 38.386719 13.429688 38.050781 13.429688 C 37.871094 13.429688 37.6875 13.378906 37.523438 13.277344 C 32.492188 10.15625 26.210938 10 25 10 C 23.789063 10 17.503906 10.15625 12.476563 13.277344 C 12.007813 13.570313 11.390625 13.425781 11.101563 12.957031 C 10.808594 12.484375 10.953125 11.871094 11.421875 11.578125 C 14.347656 9.765625 17.582031 8.867188 20.214844 8.425781 C 20.0625 7.929688 19.925781 7.617188 19.914063 7.589844 C 19.738281 7.203125 19.34375 6.960938 18.921875 7.003906 C 18.652344 7.023438 12.355469 7.566406 8.320313 10.8125 C 6.214844 12.761719 2 24.152344 2 34 C 2 34.175781 2.046875 34.34375 2.132813 34.496094 C 5.039063 39.605469 12.972656 40.941406 14.78125 41 C 14.789063 41 14.800781 41 14.8125 41 C 15.132813 41 15.433594 40.847656 15.621094 40.589844 L 17.449219 38.074219 C 12.515625 36.800781 9.996094 34.636719 9.851563 34.507813 C 9.4375 34.144531 9.398438 33.511719 9.765625 33.097656 C 10.128906 32.683594 10.761719 32.644531 11.175781 33.007813 C 11.234375 33.0625 15.875 37 25 37 C 34.140625 37 38.78125 33.046875 38.828125 33.007813 C 39.242188 32.648438 39.871094 32.683594 40.238281 33.101563 C 40.601563 33.515625 40.5625 34.144531 40.148438 34.507813 C 40.003906 34.636719 37.484375 36.800781 32.550781 38.074219 L 34.378906 40.589844 C 34.566406 40.847656 34.867188 41 35.1875 41 C 35.199219 41 35.210938 41 35.21875 41 C 37.027344 40.941406 44.960938 39.605469 47.867188 34.496094 C 47.953125 34.34375 48 34.175781 48 34 C 48 24.152344 43.785156 12.761719 41.625 10.769531 Z M 18.5 30 C 16.566406 30 15 28.210938 15 26 C 15 23.789063 16.566406 22 18.5 22 C 20.433594 22 22 23.789063 22 26 C 22 28.210938 20.433594 30 18.5 30 Z M 31.5 30 C 29.566406 30 28 28.210938 28 26 C 28 23.789063 29.566406 22 31.5 22 C 33.433594 22 35 23.789063 35 26 C 35 28.210938 33.433594 30 31.5 30 Z"></path>
            </svg>

            <p className="cntctbutton_subtitle">@SmartyNotchy</p>

            <svg className="openinnew" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="white">
              <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h560v-280h80v280q0 33-23.5 56.5T760-120H200Zm188-212-56-56 372-372H560v-80h280v280h-80v-144L388-332Z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}