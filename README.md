# embedProxy
Proxy service built for CF workers that surfaces page HEAD content.

You can preview functionality at https://pnly.io/<URL_HERE>
For example, if you wanted to share a link to the popular social media service, mastodon, you would paste the link to your mastodon instance at the end of the domain you deploy this worker to. Using the pnly.io worker URL, this would be: https://pnly.io/mastodon.social

To create your own worker, simply download the source files for this repo and run `wrangler publish` in the top directory.

This service should not be used maliciously to intercept requests or imitate legitimate sites.

This service should not be used to bypass the moderation policies of any platform/service or otherwise be used to violate TOS/EULA agreements.

This service should be used for good faith distribution of content that is being arbitrarily moderated in ways that contravene the EU’s Digital Services Act.

The default source code does not allow you to proxy domains registered in Discord's bad domain list. I personally feel this list is very accurate and am not comfortable with my service operating without it.

When you access the site, a HTTP cat is shown while you are directed. This is becuase I like cats.
