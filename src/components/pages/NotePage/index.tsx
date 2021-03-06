import { useSelector, useDispatch } from "react-redux";
import { noteActions } from "../../../redux/notes";
import { noteSelector } from "../../../redux/notes/selector";
import { Notes } from "../../organisms/Notes";
import { Transition } from "../../organisms/Transition"


export const NotePage: React.FC = () => {
  const dispatch = useDispatch();
  const notes = useSelector(noteSelector);
  const callUpdateNotes = (sentence: string) => {
    dispatch(noteActions.updateNotes({ newSentence: sentence }));
  };

  return (
    <div>
      <article>
        <h2>Notes</h2>
        <Transition />
        <Notes notes={notes} onChange={callUpdateNotes} />
      </article>
    </div>
  );
};
