
export interface Record {
  id: number
  record_google_place_name: string
  record_content_url: string
  updated_at: string
  created_at: string
}


export interface ApiResults {
  user_spot_review_status : Record[];
}

const url = import.meta.env.RECORD_URL

export async function getRecords(): Promise<ApiResults> {
  const response = await fetch(url,
  {
    headers: {
      "Content-Type": "application/json",
    }
  });
  const results: ApiResults = await response.json();
  return results;
}
