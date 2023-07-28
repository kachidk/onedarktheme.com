import { Metadata } from "next";

export const metadata: Metadata = {
  title: "One Dark Theme for Slack",
};

export default function Slack() {
  return (
    <div className="max-w-xl p-4 mx-auto">
      <img src="/assets/svg/slack.svg" alt="slack" className="mx-auto h-60 w-60" />
      <p className="font-bold text-center">
        <span className="text-6xl text-onedark-blue">One Dark Theme</span>
        <br />
        <span className="text-4xl">for Slack</span>
      </p>

      <div className="mt-8">
        <h1 className="text-xl font-bold">Install Manually</h1>
        <ul className="pl-8 space-y-2 list-decimal">
          <li>
            Copy the values below:
            <div className="mt-2 mockup-code">
              <code className="px-8">
                #282C34,#282C34,#282C34,#61AFEF,#C678DD,#FFFFFF,#98C379,#E06C75
              </code>
            </div>
          </li>
          <li>In Slack, go to File &gt; Preferences &gt; Themes.</li>
          <li>Select Dark in Appearance section.</li>
          <li>
            In Colors section, click on Create a custom theme if you never created a custom theme.
          </li>
          <li>Paste the colors you copied from the previous step in the textbox.</li>
          <li>Enjoy One Dark theme in Slack!</li>
        </ul>
      </div>
    </div>
  );
}
