
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
Tu es l'expert EBHI, spécialisé dans l'externalisation de fonctions support et opérationnelles pour les entreprises.
Ton rôle est de conseiller les dirigeants sur comment EBHI peut les libérer des tâches administratives et RH.
Points clés à promouvoir :
1. Approche personnalisée et intégration parfaite dans la structure du client.
2. Gestion complète du recrutement à l'emploi.
3. Libération du temps pour que le client se concentre sur sa direction opérationnelle.
Réponds toujours en français, de manière professionnelle, concise et orientée solution.
`;

export const getGeminiResponse = async (userPrompt: string) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userPrompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
      },
    });

    return response.text || "Désolé, je ne peux pas traiter votre demande pour le moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "L'expert EBHI est actuellement hors ligne. Veuillez nous contacter directement via notre site.";
  }
};
