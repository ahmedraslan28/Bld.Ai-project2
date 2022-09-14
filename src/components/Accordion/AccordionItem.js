import React from "react";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { AiOutlineFile } from "react-icons/ai";
function AccordionItem({ section, id }) {
  return (
    <div class="accordion-item">
      <h2 class="accordion-header" id={`${id}`}>
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#flush-collapse${id}`}
          aria-expanded="false"
          aria-controls={`flush-collapse${id}`}
        >
          <div className="try">
            <p className="try1">{section.title}</p>
            <p className="try2">
              {section.lecture_count} Lectures &#8226;{" "}
              {Math.ceil(section.content_length / 60)}min
            </p>
          </div>
        </button>
      </h2>
      <div
        id={`flush-collapse${id}`}
        class="accordion-collapse collapse"
        aria-labelledby={`${id}`}
        data-bs-parent="#accordionFlushExample"
      >
        <div class="accordion-body">
          <ul className="fa-ul">
            {section.items.map((item, index) => (
              <li key={index}>
                {item.icon_class == "udi udi-play-circle" ? (
                  <BsFillPlayCircleFill className="icon" size={13} />
                ) : (
                  <AiOutlineFile className="icon" size={13} />
                )}
                <div className="titleTime">
                  <span className="title">{item.title}</span>
                  <div className="PreviewTime">
                    {item.can_be_previewed ? (
                      <span
                        className="preview"
                        style={{
                          color: "blueviolet",
                          textDecoration: "underline",
                          cursor: "pointer",
                        }}
                      >
                        Preview
                      </span>
                    ) : (
                      <div className="empty"></div>
                    )}
                    <span
                      className="time"
                      style={{ color: "rgb(166, 163, 163)" }}
                    >
                      {item.content_summary}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AccordionItem;
