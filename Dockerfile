FROM microsoft/aspnetcore:2.0.5 AS base
WORKDIR /app
EXPOSE 40

FROM microsoft/aspnetcore-build AS build
WORKDIR /datanextUI
COPY . .
RUN dotnet restore
WORKDIR /datanextUI/datanext.web
RUN dotnet build --no-restore -c Release -o /app

FROM build AS publish
RUN dotnet publish --no-restore -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "datanext.web.dll"]