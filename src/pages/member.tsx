import type { FC } from "react";
import { Member } from "../components/templates/member";
import { rikuto, shoma, members } from "../constants/members";

const MemberPage: FC = () => <Member rikuto={rikuto} shoma={shoma} members={members} />;

export { MemberPage };
