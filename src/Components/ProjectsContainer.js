import React from "react";
import { Element } from "react-scroll";
import Projects from "./Projects";
import "./project.css";

const ProjectsContainer = () => {
  let projects = [
    {
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIIAAACCCAMAAAC93eDPAAAAYFBMVEX////98/Pwq6voenvodXbzwMHma2z0w8P87u7++fnkWlzwrq7pgYL41tflY2T76en20NDncXHslZb1ysr54ODskZHjUVLxtLTuoaHyubn42tnqh4jtmpnkVljrjIzvpqbw13b/AAACHklEQVR4nO2Y286jIBRGoSInEcVTrdb2/d9ywI6VTDL9b6pMMt+6wHQ3rYsNbERCAAAAAAAAAAAAAAAAAPx7CMOaKqlBofvC8ZQOlc596/qECrkOrXA0ncJtVchdspGoRmaFv2bc5GkM8iG7PYf71XuMmskEBpI/g8dswqKs+JhAobJluKhX9x+PBAqU3cJFZOsne02gQJomtE8eVmSlpxQKV+4blfGQjJanmI6kHnz/7663nS/URqVQUEtJ+6Uls83JnGJBdHXrjGM+A+RiMz7W5dl5uHPumONu7KSYOWfMWVeeajANopJVV1+c5rbPp0rK7nHufOiGepNp9O95MM9nGvhyoItth57sw3e/M2FlnEph2VW+Ml/bcmpsdrZB2Kq1np95OYmG84WJJIWBtKOxy6JZX5yfgR0qpUzTfwD+c8Ql4rouw/oZx9Zy3YnoJ7cvH3DuLNsx6/2KOMTW+12yvUYoK/7yX4cSP78pfphC+6EYFobUW/qPU2jshyH2WeitPFZBjbr+8LVXoOY1LQ5TGIfdgJYR3aZAlHsdcQ9S6G30iNosemfoNgWizDoWhyiou41HQckY8lYgdA5vnw5R+DwPdgVCQ5k4QuG+/GTwrgv+pCkPUJDmR4O9NNGHIN9WUJRK+mYL0T9Ce3VU3x+I3rGI9YaXOOSO3yPKPKJdQ10cej3DV/Gxsk74NhIAAAAAAAAAAAAAAAAACPwCLTEYeXgdba4AAAAASUVORK5CYII=",
      title: "Zen App Clone",
      link: "https://main--superlative-lollipop-4cae50.netlify.app",
      flink: "https://github.com/sathish0706/Capstone_Frontend",
      blink: "https://github.com/sathish0706/Capstone_Backend",
      description:
        "This app serves as a bridge to link mentors and learners together, fostering educational opportunities all around",
    },
    {
      img: "https://images.dominos.co.in/new_veg_extravaganza.jpg",
      title: "Pizza Delivery",
      link: "https://main--capable-malabi-ba2b5a.netlify.app",
      flink: "https://github.com/sathish0706/Webcode-2_Frontend",
      blink: "https://github.com/sathish0706/Webcode-2_Backend",
      description:
        "Pizza delivery app it makes easy to order pizza. it has payment gateway and admin page ",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0TUUG2IrVlr7S4aGa7_yULX03sYdK4yfe8pvwe27rzw&s",
      title: "Chat App",
      link: "https://roaring-moonbeam-8ed29d.netlify.app",
      flink: "https://github.com/sathish0706/Chat_App_Frontend",
      blink: "https://github.com/sathish0706/Chat_App_Backend",
      description:
        "Chatting app allows you to communicate with your friends in web chat room. Chatting apps make it easier, simpler, and faster to connect with everyone and it is also easy to use",
    },
    {
      img: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJgAywMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABAIDBQYHAQj/xABGEAACAQICBAgKBwYGAwAAAAAAAQIDEQQFBhIhMQdBUVNhgZGSExQVIlJUcZPB0jJCc3ShsdEkJjZjcpQlNFVk4fAWIzP/xAAZAQEAAwEBAAAAAAAAAAAAAAAAAQQFAwL/xAAjEQEBAAEDBAIDAQAAAAAAAAAAAQIDETEEEjJhExQhQVEi/9oADAMBAAIRAxEAPwDq4AMVogAAAAAAAAF0LgALi4AC4uAAuLgALgAAAAAAAAAAAAAAAAAAeN7ADdi3KokW69aNKMpTkoxSu5N7l/1HOcz4SqdPNqdLA4dVcBTqWrVpb6i49Rcnt32Omnp5Z38PGWcx5dGlWVi28XST21IL2yRhdMsipaY6L0sVklRQxlKPhcPqS1Y1U1tg7cq3PifRc4NKpUjKUZuanFuMlK6aa3priZZ+p/a43XfSPjtHnafeRcVa6TSbTV0z5o8LL0n2nWuB/TNScNGsyq3nteBqSe9b3Tvyra10XXEifqe0fP6b74V8n5lDxdOLs5xTW9OVmjYLnNeFzRCWYYV57lcH45h4/tNOO+rTXGuWUfxV+RD6ns+f02nx2lztPvI98do87DvI+a1WbV1Nu/SPCy9OS9jY+p7Pn9PphVrb9ntLkaqZq/BTpitIMt8l5lNTzPCw+lJf/enxS9q3Pt47G71sFQqLzUoS9KH6HjLpLOK9TXn7iIpXKixONShV8HU6nxMuxd0VbLLtXeXfhUACEgAAAAAAAAAAFuo9hcLFZuzsEVzfhVzydKnSyfDzcXWj4Su07eZfZHra/A5xVoOnBScrt8VjNae13X0tzBvbqSjTXRaKRgm52WtrW4rmro4zHCbKWdtyb/wW6VvLsWspxk28PWf/AKW39GXo9e8kcMOiFtbSbK6adOX+epwXZVXx6nynN02ndNp8TRtOcadYrFaL0MojBwr1LwxOIv8ASgvqrplx+zp2dXhouv0lVOtOlUjVpTlCpCSlCUXZxktqa6y7aPIgldpRjrSbskldt8iXGB9CcHGmENKsnSryiszwqUcVBfW5Jpcj/B3Rt2t0Gk8GmhVPIMp8ZzCkvKmKinVXHRhvVP8AJs3LxOhstH8QOD8Kuh//AI9mKzLL6b8mYub82K2Yeo98ehPeutchoesdH4V9KqWZY55NlU4+I4aX7RUg7qtUT3X5I7ev2HPrR5AK8rzLE5VmWGzDA1PB4nDT16cvwa9jTafQz6V0Q0jw2k+SUMxwy1Jvza9G93SqLfF/B8aPm3B4SrjsXRweEpOriK81TpwX1pM+i9C9EcJozklLB7KuJl5+IrWtrzfJ0LcgM3iaSr0nC23fF8hjqEtm0yNTD4anTlUqNRhFXlKUrKK5WYTLMfhsyw8MbgZOWGrXlSk9l432MpdXjxksaOXMZNA8juPSksgAAAAAAAAAAPcRsR9EkvcRq+4mcorgmlrvpPmf3iRjqtZ1IKLilbjMhpXBPSbM2/WJGJ1Imvj4xQy5CxjHaMOmRf1InjpRe9XPSEHXOp8DuhzxdaGkmZUZeApS/YqclsqS5y3GlxdO3iTOdeBh6JkaWcZrRpxp0s0xtOnBasYQxEkkuRK4H01t5DnvCxpr5BwHkvLaqWZ4qPnPmKT+t/U9y63xHKfLmc/6vj/7mf6kDEzqYuvOviqtStWl9KpUk5SfWwMapJKy3cQc9lyd4GHIFSindRV0B2Dgh0OeWYNZ9mdCUcdiYNUKc1to0nx9EpLsR0q8uQ+aPLuc2X+L4/qxMv1Hl3OP9XzD+5n+oG9cMemm2WjeWVV/v6kX1ql8X1LjZsPB3LW0Qyt/yfiziU4RqSlUqXlOcnKUnvk3vb9p2/g/SWiuXJbvB/FlbqvCO2j5NqhuKimG4qM5bAAAAAAAAAAAe4jV9xJe4jYjcTEVwPSv+Jsz+8SMUZPSx/vNmf3iRilvV7247GvjxFDLmvbi5J/w3iq473NP5xbLecx/uafznpCNc9JFst5zH+5p/OLZbzmP9zT+cCOCRbLecx/uafzi2W85j/c0/nAjgkWy3nMf7mn84tlvOY/3NP5wI55ck2y3nMf7mn85ZrqgmvFpVnG3neFgotPqbApO3aAbdFcuf8t/mzh1zuHB9/CeXfZv82Vuq8I7aPk2uG4qKYbiozlsAAAAAAAAAAB7iNiPoskvcRq+5Ex5r5/0tf7z5p94kYm5lNLX+9GafeZGJV20krtmvjxFHLlVrC5J8m4/1Ov3GPJuP9Tr9xnpCNcXJPk3H+p1+4x5Nx/qdfuMCNcXJPk3H+p1+4x5Nx/qdfuMCNcXJPk3H+p1+4x5Nx/qdfuMCNcXJPk3H+p1+4yxXoVsPJRr0p05PalNWuB5c7jwe/wnlv2fxZwu53Pg8/hLLfsviyt1XhHXR8m2Q3FRTDcVGcuAAAAAAAAAAAMjV9xJI9dbCZyivnzS/wA3SnNE/WJGHuZ/hAoOhphmMWvpyjUXSpRX/Jr1zXwu+MUMuaq1297faNZ8su0pB6Qq1nyy7RrPll2lIAq1nyy7RrPll2lIAq1nyy7RrPll2lIAq1nyy7Q5NlIAqud24PVbRPLfsvizg97beQ+gtDcPLDaN5ZRmrSjhoNrkur/Eq9Xf8R20ea2GG4qPI7j0z1sAAAAAAAAAAAt1I3TLh5JbAhyvhbyGVSnSzuhBt0IeCxCUfqXupdTb7Tlx9N4ijGpCUZxUlJWaaumuQ5TpXwb14VamK0eSnBvWeDlJJx/ob2W6H2l7Q15t25K+pp/neOdAlYrLMxwc3DF4DFUZJ2tOjJfjaz6iM4TW+El1FveVX2eAWl6Muwar9F9hIAar9F9g1X6L7AAGrL0Zdg1ZehLsAC5cp4bEVZKNLD1pt7lCm3+SNhyLQXPM2qxdXDTwOGv51XEx1Xbojv7bHm54zlMxt4QtE8inpFnFLBqL8BHz8RK2xQT2rr3L29B9CUIasUlFJcSRiNGtHsJkGBjhMFFvjqVZW1qsuV/pxGehGyM7X1e+renh2xWtwAOLqAAgAAAAAAAAAABS1ctzppovAIRHQT/QtPB0m9tOD9sUZCx5qk702Y/xKlzUO6h4jR5mHdRkbCxPdTaMd4jR5mHdQ8Ro8zDuoyNhYd1Nox3iNLmod1DxKlzUO6jI2PNUd1Nohww8Y/RVvYXY0UuLaX7WPSN6bKIxSKwCEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/9k=",
      title: "Movie App",
      link: "https://quiet-conkies-39765b.netlify.app",
      flink: "https://github.com/sathish0706/Movie_App_Frontend",
      blink: "https://github.com/sathish0706/Movie_App_Frontend",
      description:
        "This movie app is designed for ease of use so you can conveniently manage your collections. Adding & editing is a breeze . Plus it allows users to quickly view their favirate films",
    },
  ];
  return (
    <Element name="projects" className="project-container">
      <div>
        {/* <h1>My Projects</h1>
        <p>
          here are some projects which i done for makinglives of people easy
        </p> */}
        <div className="projectContainer">
          <h1>Projects</h1>
          <h3>admin Email : admin00@gmail.com</h3>
          <h3>admin password: admin@1234</h3>
          <h3>user Name : User</h3>
          <h3>user Email : user01@gmail.com</h3>
          <h3>user password: user012345</h3>
          <br />
          {projects.map((project, i) => {
            return (
              <Projects
                img={project.img}
                title={project.title}
                link={project.link}
                flink={project.flink}
                blink={project.blink}
                desc={project.description}
              />
            );
          })}
        </div>
      </div>
    </Element>
  );
};

export default ProjectsContainer;
