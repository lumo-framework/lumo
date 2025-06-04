import {http} from "@lumo-framework/core";

export async function GET() {
    return http.response(http.STATUS_OK).json({
        data: 'Hello from Lumo!',
    });
}
