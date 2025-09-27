ARG DOTNET_VERSION=9.0

# Base
FROM mcr.microsoft.com/dotnet/sdk:${DOTNET_VERSION} AS base
WORKDIR /app
COPY *.sln .
COPY Calculators/*.csproj ./Calculators/
RUN dotnet restore
COPY . .

# Development
FROM base AS dev
RUN dotnet build -c Debug -o /app/build
EXPOSE 5181 
ENV ASPNETCORE_URLS=http://+:5181
ENTRYPOINT ["dotnet", "build/Calculators.dll"]

# Publish
FROM base AS publish
RUN dotnet publish -c Release -o /app/publish /p:UseAppHost=false

# Production
FROM mcr.microsoft.com/dotnet/aspnet:${DOTNET_VERSION} AS prod
WORKDIR /app
COPY --from=publish /app/publish .
EXPOSE 5181
ENV ASPNETCORE_URLS=http://+:5181
ENTRYPOINT ["dotnet", "Calculators.dll"]