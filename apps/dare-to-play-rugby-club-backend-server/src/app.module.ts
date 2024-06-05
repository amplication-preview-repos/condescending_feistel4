import { Module } from "@nestjs/common";
import { MatchModule } from "./match/match.module";
import { PlayerModule } from "./player/player.module";
import { EventModule } from "./event/event.module";
import { SponsorModule } from "./sponsor/sponsor.module";
import { VolunteerModule } from "./volunteer/volunteer.module";
import { ArchiveModule } from "./archive/archive.module";
import { NewsletterSubscriberModule } from "./newsletterSubscriber/newsletterSubscriber.module";
import { MerchandiseModule } from "./merchandise/merchandise.module";
import { TrainingModule } from "./training/training.module";
import { UserModule } from "./user/user.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    MatchModule,
    PlayerModule,
    EventModule,
    SponsorModule,
    VolunteerModule,
    ArchiveModule,
    NewsletterSubscriberModule,
    MerchandiseModule,
    TrainingModule,
    UserModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
