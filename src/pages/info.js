import React from 'react'
import Link from 'gatsby-link'
import Email from './email.gif'

const IndexPage = () => (
  <div>
    <section style={{marginTop:'4rem'}}>
    <h2>About</h2>
    <p>
    Zach Krall (American, b. 1993 Japan) is an artist-coder based in New York City. Currently, Krall's practice explores the relationships between physical identities and their digital manifestations. Krall is an advocate for the decentralized web. He received his BFA from the School of Visual Arts in 2015.
    </p>
    </section>

    <section>
    <h2>Contact</h2>
    <p>
    Email: <a href="mailto:zach@zachkrall.com">zach@zachkrall.com</a>
<br />Twitter: <a href="https://twitter.com/zachkrall">@zachkrall</a>
<br/>PGP: <a href="https://keybase.io/zachkrall/key.asc">9FAC EB7E A441 FCD3</a>
<br/>Rotonde: <a href="dat://9a1b59963085cdc9edd8fbb89e73c6b4f573fcf188e68d55b2faa3855520b815/">dat://9a1b59..15/</a> (requires <a href="https://beakerbrowser.com/">Beaker Browser</a>)
</p>
    </section>

    <section>
    <img src={Email}/>
    <form action="https://tinyletter.com/zachkrall" method="post" target="popupwindow" className="tl" onsubmit="window.open('https://tinyletter.com/zachkrall', 'popupwindow', 'scrollbars=yes,width=800,height=600');return true"><input type="text" className="tlInput" name="email" id="tlemail" placeholder="Your Email Address" /><input type="hidden" value="1" name="embed"/><input className="tlSubmit" type="submit" value="Subscribe"/></form>
    </section>


    <section>

    <h2>Curriculum Vitae</h2>

    {/* EDUCATION */}
    <div className="grid cv"><div className="col-12"><h3>Education</h3></div><div className="col-12 grid"><div className="col-2">2015</div><div className="col-10">BFA Photography, Honors Program, School of Visual Arts (New York, NY)</div></div></div>{/* EXHIBITIONS */}<div className="grid cv"><div className="col-12"><h3>Exhibitions</h3></div><div className="col-12 grid"><div className="col-2">2017</div><div className="col-10">
              where-hows, Where Haus (<a href="https://en.wikipedia.org/wiki/The_Hole,_New_York" rel="noopener">The Hole</a>, NY)
              <br /><a href="https://sfmoma.show/" rel="noopener">Unauthorized SFMOMA Show #567</a>, San Francisco Museum of Modern Art (San Francisco, CA) <sup>online</sup><br /><a href="https://web.archive.org/web/20170621143338/http://www.sva.edu/events/events-exhibitions/all-staff-art-show-2017">All Staff Art Show</a>, School of Visual Arts (New York, NY)
            </div><div className="col-2">2016</div><div className="col-10"><a href="https://www.facebook.com/events/1596926450604299/" rel="noopener">Slippery When Wet</a>, Chinatown Soup (New York, NY)
              <br />Obstructed Views, Scott Charmin Gallery (Houston, TX)
              <br />Art-A-Hack, ThoughtWorks (New York, NY)
              <br /><a href="https://www.facebook.com/events/927758670606814" rel="noopener">Terrible Children</a>, Chinatown Soup (New York, NY)</div><div className="col-2">2015</div><div className="col-10"><a rel="noopener" href="https://web.archive.org/web/20160215033318/http://miami-project.com/galleries/sva-galleries-miami-project-2015">Miami Project Art Fair</a>, School of Visual Arts (Miami, FL)
              <br />Fruit Salad, School of Visual Arts (New York, NY)
              <br /><a href="http://newhive.com/jetlag/deep-web-neverland" rel="noopener">Deep Web Neverland</a>, JETLAG (Fahaheel, Kuwait) <sup>online</sup><br /><a href="https://web.archive.org/web/20170613235721/http://www.sva.edu/events/archive/mentors-2015" rel="noopener">Mentors</a>, SVA Chelsea Gallery (New York, NY)
              <br />IT MOVES!, School of Visual Arts (New York, NY)
              <br /><a href="https://web.archive.org/web/20170621143420/https://www.visualaids.org/events/detail/17th-postcards-from-the-edge" rel="noopener">17th Annual Postcards from the Edge</a>, Luhring Augustine Gallery (New York, NY) <sup>benefit</sup></div><div className="col-2">2014</div><div className="col-10">
              On Training, School of Visual Arts (New York, NY)
              <br /><a href="https://events.newschool.edu/event/photofeast_pin-up_exhibition_fall_2015#.VmcsytKDFBc" rel="noopener">PhotoFeast</a>, Parsons The New School of Design (New York, NY)
              <br />Pantoum, School of Visual Arts (New York, NY)
              <br />Self Portraiture Show, School of Visual Arts (New York, NY)
              <br /><a href="https://www.facebook.com/events/434763419959575/">Spring Salon Show</a>, Greenpoint Gallery (Brooklyn, NY)
              <br />Installations, School of Visual Arts (New York, NY)
              <br />Intrusion Symptoms, School of Visual Arts (New York, NY)
            </div><div className="col-2">2013</div><div className="col-10">
              Yet to be Determined, School of Visual Arts (New York, NY) <sup>solo</sup><br />Scholarship Exhibition, Sanford-Springvale Arts Association (Sanford, ME) <sup>solo</sup></div><div className="col-2">2012</div><div className="col-10">
              Freshmen Photography Show, School of Visual Arts (New York, NY)
              <br />Appropriated Images, School of Visual Arts (New York, NY)
            </div></div></div>{/* SCREENINGS */}<div className="grid cv"><div className="col-12"><h3>Screenings</h3></div><div className="col-12 grid"><div className="col-2">2016</div><div className="col-10"><a href="http://svatheatre.com/events/afterschoolspecial2016/">After School Special</a>, September 16, SVA Theatre (New York, NY)
              <br /><a href="http://blog.sva.edu/2016/04/sva-premieres-introducing-hollywood-to-the-next-wave-of-animators-and-filmmakers/">SVA Premieres</a>, June 2, The Linwood Dunn Theatre (Los Angeles, CA)
            </div></div></div>{/* CURATORIAL PROJECTS */}<div className="grid cv"><div className="col-12"><h3>Curatorial Projects</h3></div><div className="col-12 grid"><div className="col-2">2017</div><div className="col-10">
              Log On, Ludlow House (New York, NY) with Emily Sussman
            </div><div className="col-2">2016</div><div className="col-10"><a href="https://www.are.na/zach-krall/what-happens-when" rel="noopener">What Happens When...</a>, POWRPLNT (Brooklyn, NY)
            </div><div className="col-2">2015</div><div className="col-10">
              IT MOVES!, School of Visual Arts (New York, NY)
            </div></div></div>{/* AWARDS */}<div className="grid cv"><div className="col-12"><h3>Awards / Residencies / Hackathons</h3></div><div className="col-12 grid"><div className="col-2">2016</div><div className="col-10"><a href="http://artahack.io" rel="noopener">Art-A-Hack</a>, "<a href="https://artahack.io/projects/kinect-vr/" rel="noopener">KinectVR</a>" Participant, The Volumetric Society, ThoughtWorks, NYU Tandon School of Engineering (Brooklyn, NY)
            </div><div className="col-2">2013</div><div className="col-10"><a href="https://web.archive.org/web/20130507084535/http://photo.vandm.com:80/?product_cat=zach-krall" rel="noopener">V&amp;M Photography</a> Emerging Artist
            </div></div></div>{/* WORKSHOPS */}<div className="grid cv"><div className="col-12"><h3>Workshops</h3></div><div className="col-12 grid"><div className="col-2">
              2017
            </div><div className="col-10">
              GIF IT! Workshop - March 3, 2017 - <a href="http://naea17.getforge.io/2_sessions_offsite" data-web-archive="https://web.archive.org/web/20170227230218/http://naea17.getforge.io/2_sessions_offsite">National Art Education Association Convention</a> (New York, NY)
            </div></div></div>{/* TEACHING */}<div className="grid cv"><div className="col-12"><h3>Teaching</h3></div><div className="col-12 grid"><div className="col-2">
              2017
            </div><div className="col-10">
              SVA Pre-College, Digital Photography (PHP-0102-A), Guest Lecturer
              <br />SVA Pre-College, Studio Photography (PHP-0301-A), Guest Lecturer
            </div></div></div>{/* BIBLIOGRAPHY */}<div className="grid cv"><div className="col-12"><h3>Bibliography</h3></div><div className="col-12 grid"><div className="col-2">2015</div><div className="col-10">
              Bratton, Benjamin. "<a href="http://dismagazine.com/discussion/73272/benjamin-bratton-machine-vision/" rel="noopener">Machine Vision</a>," DIS Magazine: Data Issue (ed. Marvin Jordan and Mike Pepi), March 16, 2015.
              <br />"Zach Krall: Selected Works," Published by Conveyor Arts (Jersey City, NJ) and School of Visual Arts (New York, NY).
            </div><div className="col-2">2012</div><div className="col-10"><a href="http://issuu.com/laurenpoor/docs/name" rel="noopener">Name Magazine: Issue 3</a>, ed. Lauren Poor, pp. 30-37
            </div></div></div>{/* PRESS */}<div className="grid cv"><div className="col-12"><h3>Press</h3></div><div className="col-12 grid"><div className="col-2">2015</div><div className="col-10">
              Bodick, Noelle. "<a href="http://international.blouinartinfo.com/photo-galleries/highlights-from-miami-project-2015?image=11" rel="noopener">Highlights from Miami Project 2015</a>," Blouin Art Info, December 3, 2015.
              <br />"<a href="http://blog.sva.edu/2015/12/sva-on-view-at-miami-art-week-2015/" rel="noopener">SVA On View at Miami Art Week 2015</a>," SVA Close Up, December 2, 2015.
            </div><div className="col-2">2013</div><div className="col-10">
              Scully, James. "<a href="http://thewallbreakers.com/an-exclusive-look-at-vm-photographys-final-15-artists-in-their-emerging-artist-series/" rel="noopener">An Exclusive Look At V&amp;M Photography’s Final 15 Artists in Their Emerging Artist Series</a>," The Wall Breakers (blog), February 11, 2013.
            </div><div className="col-2">2012</div><div className="col-10">
              "<a href="http://www.fosters.com/article/20120607/gjcommunity03/706079806">Krall is June’s featured artist</a>," Foster’s, June 7, 2012.
            </div><div className="col-2">2011</div><div className="col-10">
              Keyes, Bob. "<a href="http://www.pressherald.com/2011/05/01/arts-dispatches_2011-05-01/">Arts Dispatches</a>," Portland Press Herald, May 1, 2011.
            </div></div></div>{/* INTERVIEWS */}<div className="grid cv"><div className="col-12"><h3>Interviews</h3></div><div className="col-12 grid"><div className="col-2">2013</div><div className="col-10">
              Pulgarin, Laura. "<a href="http://portable.tv/loves/post/zach-krall-balancing-technology-and-nature/" rel="noopener">Zach Krall: Balancing Technology and Nature</a>," Portable.tv, April 19, 2013.
            </div><div className="col-2">2012</div><div className="col-10">
              Ming, Lee Chang. "<a href="http://nopefun.com/post/16854474060/interview-149-zach-krall" rel="noopener">Interview #149. Zach Krall</a>," Nope Fun, February 1, 2012.
            </div></div></div>{/* COLLECTIONS */}<div className="grid cv"><div className="col-12"><h3>Collections</h3></div><div className="col-12"><a href="http://jodi.org" rel="noopener">jodi.org</a> (Netherlands)
            <br />Private Collection (New York, NY)
          </div></div>{/* RELATED EXPERIENCE */}<div className="grid cv"><div className="col-12"><h3>Related Experience</h3></div><div className="col-12 grid">
            <div className="col-2">2015-Current</div><div className="col-10">
              Admissions Counselor, School of Visual Arts (New York, NY)
            </div><div className="col-2">2013-2015</div><div className="col-10">
              Studio Assistant, <a href="https://en.wikipedia.org/wiki/Josephine_Meckseper">Meckseper</a> Studio (New York, NY)
            </div></div></div>

    </section>
  </div>
)

export default IndexPage
