import { Icon } from "./Icon";
import Container from "./Container";
import { site } from "../data/site";

// פס עליון כהה עם פרטי קשר — כמו ב-danrixphysio.com
export default function TopBar() {
  return (
    <div className="bg-teal-700 text-white">
      <Container>
        <div className="flex h-10 items-center justify-center gap-6 text-sm sm:justify-start">
          <a
            href={site.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-teal-200"
          >
            <Icon name="whatsapp" className="h-4 w-4" />
            <span dir="ltr">{site.phone}</span>
          </a>
          <a href={`mailto:${site.email}`} className="hidden items-center gap-2 hover:text-teal-200 sm:flex">
            <Icon name="mail" className="h-4 w-4" />
            <span dir="ltr">{site.email}</span>
          </a>
        </div>
      </Container>
    </div>
  );
}
