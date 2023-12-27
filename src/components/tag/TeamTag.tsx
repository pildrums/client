import Image from "next/image";
import Text from "../common/Text";
import "./TeamTag.scss";
import { CommentData } from "../comment/Comment";


function TeamTag({ team }: CommentData) {
  return (
    <div className={`team-tag-block ${team.color}`}>
      <div className="team-tag-block__img">
        <Image src={team.img} alt={team.name} width={16} height={16} />
      </div>
      <Text caption>{team.name}</Text>
    </div>
  );
}

export default TeamTag;
