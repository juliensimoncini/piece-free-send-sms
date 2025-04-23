import { createPiece, createAction, Property, PieceAuth } from '@activepieces/pieces-framework';
import axios from 'axios';

export const freeSmsPiece = createPiece({
    displayName: 'Free SMS',
    description: 'Envoie un SMS via Free Mobile',
    logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Free_logo_2015.svg',
    authors: ['Julien Simoncini'],

    actions: [
        createAction({
            name: 'send_sms',
            displayName: 'Envoyer un SMS',
            description: 'Envoie un SMS via l’API Free Mobile',
            props: {
                user: Property.ShortText({
                    displayName: 'Identifiant utilisateur',
                    required: true,
                }),
                pass: Property.ShortText({
                    displayName: 'Mot de passe API',
                    required: true,
                }),
                msg: Property.ShortText({
                    displayName: 'Message à envoyer',
                    required: true,
                }),
            },
            async run({propsValue}) {
                const {user, pass, msg} = propsValue;

                const encodedMsg = encodeURIComponent(msg);
                const url = `https://smsapi.free-mobile.fr/sendmsg?user=${user}&pass=${pass}&msg=${encodedMsg}`;

                try {
                    const response = await axios.get(url);

                    if (response.status === 200) {
                        return {success: true, message: 'SMS envoyé avec succès !'};
                    } else {
                        return {success: false, message: `Erreur: ${response.statusText}`};
                    }
                } catch (error: any) {
                    return {success: false, message: `Erreur lors de l’envoi: ${error.message}`};
                }
            },
        }),
    ],

    triggers: [],
    auth: undefined
});