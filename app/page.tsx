import { socialData } from "@/data/SocialData";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 overflow-hidden">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        John Allison
      </h1>
      <p className="text-sm text-muted-foreground">they/them</p>
      <div className="flex flex-row pt-10">
        {socialData.map((sd, index) => {
          return (
            <div key={`social-div-${index}`}>
              {sd.link && (
                <a
                  key={`social-link-${index}`}
                  className="px-3"
                  href={sd.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <sd.icon key={`social-icon-${index}`} />
                </a>
              )}
            </div>
          );
        })}
      </div>
    </main>
  );
}
