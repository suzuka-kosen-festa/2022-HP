import type { FC } from "react";
import { NotFound } from "../components/templates/not-found";

const NotFoundPage: FC = () => <NotFound status={404} message="Not Found" />;

export { NotFoundPage };
