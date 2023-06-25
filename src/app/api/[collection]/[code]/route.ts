import { NextRequest, NextResponse } from "next/server";
import models from "@/data/models";
import dbConnect from "@/lib/dbConnect";
import { limitFields } from "@/utils/fns";

export const GET = async (
  req: NextRequest,
  {
    params: { collection, code },
  }: { params: { collection: string; code: string } }
) => {
  try {
    if (!models[collection]) {
      return NextResponse.json(
        {
          message: "The realm you are trying to reach is beyond your grasp.",
        },
        { status: 404 }
      );
    }

    await dbConnect();

    const document = await models[collection]
      .find({ code })
      .select(limitFields(req));

    if (document.length === 0) {
      return NextResponse.json(
        {
          status: "fail",
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
  } catch (err) {
    console.log(`error at: /api/${collection}/${code}`, err);
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
