import { OpenAIClient, AzureKeyCredential } from "@azure/openai";

const client = new OpenAIClient(
  process.env.AZURE_OPENAI_ENDPOINT,
  new AzureKeyCredential(process.env.AZURE_OPENAI_KEY)
);

export const getAIRecommendations = async (healthData) => {
  const prompt = `Based on the following health data, provide a personalized recommendation: ${JSON.stringify(
    healthData
  )}`;
  const response = await client.chatCompletion({ prompt });
  return response.choices[0].text;
};
