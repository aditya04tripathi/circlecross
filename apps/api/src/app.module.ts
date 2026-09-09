import { Module } from "@nestjs/common";
import { CacheModule } from "./core/cache/cache.module.js";
import { PlatformConfigModule } from "./core/config/platform-config.module.js";
import { DatabaseModule } from "./core/database/database.module.js";
import { EventsModule } from "./core/events/events.module.js";
import { FeatureFlagsModule } from "./core/feature-flags/feature-flags.module.js";
import { HealthModule } from "./core/health/health.module.js";
import { LocksModule } from "./core/locks/locks.module.js";
import { QueueModule } from "./core/queue/queue.module.js";
import { StorageModule } from "./core/storage/storage.module.js";
import { TelemetryModule } from "./core/telemetry/telemetry.module.js";
import { IntegrationsModule } from "./integrations/integrations.module.js";
import { AccessModule } from "./modules/access/access.module.js";
import { CommerceModule } from "./modules/commerce/commerce.module.js";
import { CommunicationModule } from "./modules/communication/communication.module.js";
import { CommunityModule } from "./modules/community/community.module.js";
import { DiscoveryModule } from "./modules/discovery/discovery.module.js";
import { IdentityModule } from "./modules/identity/identity.module.js";
import { PlatformModule } from "./modules/platform/platform.module.js";
import { SocialGraphModule } from "./modules/social-graph/social-graph.module.js";
import { TrustSafetyModule } from "./modules/trust-safety/trust-safety.module.js";

@Module({
  imports: [
    PlatformConfigModule,
    DatabaseModule,
    CacheModule,
    QueueModule,
    StorageModule,
    EventsModule,
    LocksModule,
    TelemetryModule,
    FeatureFlagsModule,
    HealthModule,
    IntegrationsModule,
    IdentityModule,
    AccessModule,
    SocialGraphModule,
    CommunityModule,
    DiscoveryModule,
    CommunicationModule,
    TrustSafetyModule,
    CommerceModule,
    PlatformModule,
  ],
})
export class AppModule {}
