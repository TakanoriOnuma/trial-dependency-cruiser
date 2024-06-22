import { cruise } from 'dependency-cruiser';
import extractTsConfig from 'dependency-cruiser/config-utl/extract-ts-config';
import extractDepcruiseOptions from 'dependency-cruiser/config-utl/extract-depcruise-options';

try {
  const options = await extractDepcruiseOptions('./.dependency-cruiser.cjs');

  // configデータを引っ張ってきてもaliasの解決をしてくれなかったorz
  const result = await cruise(
    ['src/'],
    { ...options, exclude: 'node_modules', outputType: 'text', parser: 'tsc' },
    undefined,
    {
      tsConfig: extractTsConfig('./tsconfig.json'),
    },
  );
  console.log(result.output);
  // console.dir(result.output, { depth: 10 });
} catch (err) {
  console.error(err);
}
