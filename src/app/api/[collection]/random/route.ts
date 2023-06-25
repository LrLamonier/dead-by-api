import { NextRequest, NextResponse } from "next/server";
import models from "@/data/models";
import dbConnect from "@/lib/dbConnect";
import { TProject, limitFieldsAggregate } from "@/utils/fns";

export const GET = async (
  req: NextRequest,
  { params: { collection } }: { params: { collection: string } }
) => {
  try {
    if (!models[collection]) {
      return NextResponse.json(
        {
          status: "error",
          message: "The realm you are trying to reach is beyond your grasp.",
        },
        { status: 404 }
      );
    }

    await dbConnect();

    const queryAmount: number =
      Number(req.nextUrl.searchParams.get("amount")) || 1;
    const amount: number =
      queryAmount >= 1 && queryAmount <= 10 ? queryAmount : 1;
    const fields: TProject = limitFieldsAggregate(req);

    const document: any = await models[collection].aggregate([
      {
        $sample: { size: amount },
      },
      ...fields,
    ]);

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
  } catch (err) {
    console.log(`error at route: /api/${collection}/random`, err);
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
