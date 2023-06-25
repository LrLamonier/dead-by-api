import { NextRequest, NextResponse } from "next/server";
import dbConnect from "../../../lib/dbConnect";
import APIFeatures from "../../../utils/ApiFeatures";
import models from "../../../data/models";

export const GET = async (
  req: NextRequest,
  { params: { collection } }: { params: { collection: string } }
) => {
  try {
    if (!models[collection]) {
      return NextResponse.json(
        {
          message: "The realm you are trying to reach if beyond your grasp.",
        },
        { status: 404 }
      );
    }

    await dbConnect();

    const queryString = req.nextUrl.searchParams.get("fields");

    const document = await new APIFeatures(
      models[collection].find(),
      queryString
    ).limitFields().query;

    if (document.length === 0) {
      return NextResponse.json(
        {
          message:
            "What you are looking for is nowhere to be found on the Entity's realm.",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        status: "success",
        results: document.length,
        data: document,
      },
      { status: 200 }
    );
  } catch (err: any) {
    console.log(`error at route: /api/${collection}`, err);
    return NextResponse.json(
      {
        status: "fail",
        message:
          "Claudette burned a Sacrificial Ward and cancelled your endpoint offering.",
      },
      { status: 500 }
    );
  }
};
