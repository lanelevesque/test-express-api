import apicalypse from "apicalypse";
import { ApicalypseConfig } from "apicalypse";

class apicalypseClient {
  _token: string;
  private _igdbClientId: string;
  private _igdbClientSecret: string;
  private _baseUrl: string;

  constructor() {
    this._token = "";
    this._igdbClientId = app.getEnv("IGDB_CLIENT_ID");
    this._igdbClientSecret = app.getEnv("IGDB_CLIENT_SECRET");
    this._baseUrl = app.getEnv("IGDB_BASE_URL");
    this.getTokenForClientDetails().then((accessToken) => {
      this.token = accessToken;
    });
  }

  get token() {
    return this._token;
  }

  set token(value: string) {
    this._token = value;
  }

  get igdbClientId() {
    return this._igdbClientId;
  }

  get igdbClientSecret() {
    return this._igdbClientSecret;
  }

  get baseUrl() {
    return this._baseUrl;
  }

  async getTokenForClientDetails() {
    try {
      const response = await fetch(
        `https://id.twitch.tv/oauth2/token?client_id=${this.igdbClientId}&client_secret=${this.igdbClientSecret}&grant_type=client_credentials`,
        {
          method: "POST",
        }
      );

      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const responseJson = await response.json();
      console.log(responseJson.access_token);
      return responseJson.access_token;
    } catch (error) {
      throw new Error(`Error: ${error}`);
    }
  }

  getRequestOptions = (method: string): ApicalypseConfig => {
    let request: ApicalypseConfig = {
      queryMethod: "body",
      method: method,
      baseURL: this.baseUrl,
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${this.token}`,
        "Client-ID": this.igdbClientId,
      },
      responseType: "json",
      //timeout: 1000, // 1 second timeout
    };

    return request;
  };
}

const igdbClient = new apicalypseClient();

module.exports = igdbClient;
