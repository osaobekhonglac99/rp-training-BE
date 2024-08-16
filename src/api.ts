import axios from "axios";

const url = "https://training.reactplus.vn/resource/store-video-insight";

const headers = (csrf: string) => ({
  accept: "application/json, text/javascript, */*; q=0.01",
  "accept-language": "en-US,en;q=0.9,vi;q=0.8",
  "cache-control": "no-cache",
  "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
  pragma: "no-cache",
  priority: "u=1, i",
  "sec-ch-ua":
    '"Not)A;Brand";v="99", "Google Chrome";v="127", "Chromium";v="127"',
  "sec-ch-ua-mobile": "?0",
  "sec-ch-ua-platform": '"macOS"',
  "sec-fetch-dest": "empty",
  "sec-fetch-mode": "cors",
  "sec-fetch-site": "same-origin",
  "x-csrf-token": csrf,
  "x-requested-with": "XMLHttpRequest",
  cookie:
    "_ga=GA1.1.963399544.1719909225; _ga_MDBTJLG86F=GS1.1.1723710206.10.0.1723710208.0.0.0; not_open_popup=1; XSRF-TOKEN=eyJpdiI6ImM4ZkFtZ3lRWmdISDNaWVNtOVRlL0E9PSIsInZhbHVlIjoiaUI5UG0rZDFVU2xvOWIyWG43QUY2eEtkVGV4RTRWc1UwdUxvRWgvTkg4OFE1dkx6djVyYWFIQTVNNThkQjFRV20vT2FNOHlqUVpuL0FHYlF0TWRUUXQrQXBRMkFjNjBodzlRblRCTDBCaDlFRWpubzBYOEVQWndiNTM2dVdpUjVYQlhBc1pOamRldUNwYWFqR2UvdVUrTi9XcnU2c3ZYV2oxSG9HTHBCYmswYllOaGJNZFliK29NdElQM01uOWJqbkx2eS92YUtyc3dpQ1hFTERzM2xIRjJDRkxLWGZQN3o1NlNpSGdadkswQU10WjM0aWF6dk1hUHdBZDlSekNQRHVZdVd2NFd6Q0xYUXZKeE9pZkcxL09xdEg2WVBtRXc0MHUvVUJKdVlYY2g5MVhxRUt1a1N3Q09kOTUxQzFLSGppeE0xT01KTHUweWk0TnBwMmNCSEFrVU84ZDRHemErbEhiL0Q0RGVMOHZSQlNIbDJyNE9waDVMb1g2aFF2SWprYmY5R3pDUjFFQ3I1VE9tbzlKb08yeE5kVVUzWmNRaHA5L2Vwak9CMm50dTdicHU0UUlXaGxMUm1jejI5WjBFdTlKV0wwVVdqV2ljVjQ2Njl6ZUhHRFRPWWlyRlN2cXFyK0QrRXlWTmpscDcwbmFhNFUzMU0xNzl5YmYybTNkZGciLCJtYWMiOiIyOGQxMTk1YmZjMzAzNDBlMDUwNjU4ZDQ0ZWYzNGFiNTc3MmNhMzc2OGI0ZTUxYzRjMzE2ZGRkMjkxZDU2ZDhlIiwidGFnIjoiIn0%3D; gitiho=eyJpdiI6Im1KNnZXZGhqWlhGNUROelZzbTJta2c9PSIsInZhbHVlIjoid1ZwNmpBWEJXenNGZ2NmWDBUNnZpNUdCZWVleEttZkhWTGlkUm1CN1VSQ0E4c0lqYm1xM3JGMWdCcmZ2NDJWSWdCdTAvUUhVdkd1ZXp3WERmZEh1Z0RGL3FjSkkwV2xHT1hRalJQK05HT2ZJQmFaTU5VVkRWNGF6T0l5YjNySEw5dk1lNnJVRDNCSnJCRUJmK3JQMDA1b3FURUJyM3c0L2U1TDYxNkc4aTBmVmN3V3FJSkRrSzFWdlY2ajlaa05tZExDcGxOd0pqMlhOZjdaSWgySFZrR2dPODJYK0tzeEJHZTBsTkI3bFpYOUFIZlN6MkYrNzM2aFJBVkZMUU5Kcjk2ZHJNNVNKd3hYejZldll6RXhFcVU4ZnpqUTg4VWMrTUkzVWpRNGJNeHJOdlh4M1pTZGtXd0p4WmZUTUE4SFBYSUhTNzBqV2pmOWxMRElOZFA1VDR4ZmgzeHRHelJ4eTlJS1lvZzBMc05FWDVXTFZJU05ROWFudjRkRWhLVDMvQXNNdXNzUEJjYWpQaThpV0lvTTMybmc3eUFmc2EzYVNWWFY2amwxUTFZeWx4eEdURkpzR085V1BoMksyZVpuT3MzZmZVSUthbnl1djkxVlhXQ3daOWpveWhhNE53MW9kOTRzb3NrbmZTMitHdVp3RkVhbzV4Nm82cW9tUEdIc0kiLCJtYWMiOiIxY2Y0ZmEzZTQxMjlkMjQyZGYxZGZhNTM2ZGRlNDE1YTVlYzkyOTYxMTM5NGY5MjQ3Y2Y2YTJiZDU5ZmNlOGYwIiwidGFnIjoiIn0%3D; _tracking=page%3D1%26previous_domain%3Dtraining.reactplus.vn; video_time=0.007483",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Access-Control-Allow-Origin": "*",
});

export const postVideo = async (id: number, csrf: string) => {
  try {
    const { data } = await axios.post(
      url,
      {
        body: `ended_duration=10&current_content_id=${id}&content_type=&visibilitychange=false`,
      },
      {
        headers: headers(csrf),
      }
    );

    return data;
  } catch (error) {
    console.log("postVideo error", error);
  }
};
