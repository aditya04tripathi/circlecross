# API bounded contexts

Each folder is an empty DDD seam. New capability folders belong inside the owning context and use `application`, `domain`, `infrastructure`, and `presentation` layers when behaviour is introduced.

| Context          | Owned capability seams                                                                     |
| ---------------- | ------------------------------------------------------------------------------------------ |
| Identity         | Auth, users, sessions, devices, verification, profiles                                     |
| Access           | Products, tenancy, organisations, institutions, memberships, permissions, product policies |
| Social graph     | Encounters, contexts, intents, consent, relationships, mutuals, introductions, graph       |
| Community        | Circles, communities, events, opportunities                                                |
| Discovery        | Search, recommendations, discovery                                                         |
| Communication    | Conversations, messages, notifications                                                     |
| Trust and safety | Blocks, reports, moderation, age policies, trust                                           |
| Commerce         | Billing, subscriptions, institution licensing                                              |
| Platform         | Uploads, media, feature flags, analytics, audit                                            |
