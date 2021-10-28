export default class User {
  constructor(user: User) {
    this.avatar_url = user.avatar_url;
    this.events_url = user.events_url;
    this.followers_url = user.followers_url;
    this.gists_url = user.gists_url;
    this.gravatar_id = user.gravatar_id;
    this.html_url = user.html_url;
    this.id = user.id;
    this.login = user.login;
    this.node_id = user.node_id;
    this.organizations_url = user.organizations_url;
    this.received_events_url = user.received_events_url;
    this.repos_url = user.repos_url;
    this.site_admin = user.site_admin;
    this.starred_url = user.starred_url;
    this.subscriptions_url = user.subscriptions_url;
    this.type = user.type;
    this.bio = user?.bio
  }

  avatar_url: string;
  events_url: string;
  followers_url: string;
  gists_url: string;
  gravatar_id: string;
  html_url: string;
  id: Number;
  login: string;
  node_id: string;
  organizations_url: string;
  received_events_url: string;
  repos_url: string;
  site_admin: Boolean;
  starred_url: string;
  subscriptions_url: string;
  type: string;
  bio: string;
}