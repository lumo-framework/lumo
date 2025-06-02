import {http} from "@tsc-run/core";

export async function GET() {
    return http.response(http.STATUS_OK).json({
        data: 'Hello from tsc.run!',
    });
}
